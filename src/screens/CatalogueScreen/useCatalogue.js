import {useEffect, useState} from 'react';
import client from '../../core/client';
import {GET_CATEGORIES, GET_COFFEES_FROM_CATEGORY} from './queries';

export const useCatalogue = () => {
  const [searchString, setSearchString] = useState('');
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [coffeesLoading, setCoffeesLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [categoriesPageInfo, setCategoriesPageInfo] = useState({
    hasNextPage: true,
    endCursor: '',
  });
  const [categories, setCategories] = useState([]);
  const [coffees, setCoffees] = useState([]);
  const [coffeesPageInfo, setCoffeesPageInfo] = useState({
    hasNextPage: true,
    endCursor: '',
  });

  const getCoffees = async ({fetchingMore, refreshing, signal}) => {
    console.log('GetCoffeesCalled', activeIndex);
    if (!fetchingMore) {
      setCoffees([]);
    }
    if (refreshing) setCoffeesLoading(true);
    const coffeesResponse = await client.query({
      query: GET_COFFEES_FROM_CATEGORY,
      variables: {
        id: categories[activeIndex]?.id,
        endCursor: fetchingMore ? coffeesPageInfo?.endCursor : '',
        searchString: searchString,
      },
      fetchPolicy: 'no-cache',
    });
    console.log('CoffeesResponse', coffeesResponse);
    const newCoffees = coffeesResponse?.data?.category?.coffees?.edges?.map(
      ({node}) => node,
    );
    if (signal?.aborted) return;
    setCoffees(fetchingMore ? [...coffees, ...newCoffees] : newCoffees);
    setCoffeesPageInfo(coffeesResponse?.data?.category?.coffees?.pageInfo);
    setCoffeesLoading(false);
  };

  const getCategories = async ({fetchingMore}) => {
    if (!fetchingMore) setCategoriesLoading(true);
    const categoriesResponse = await client.query({
      query: GET_CATEGORIES,
      variables: {
        endCursor: fetchingMore ? categoriesPageInfo?.endCursor : '',
      },
      fetchPolicy: 'no-cache',
    });
    const newCategories =
      categoriesResponse?.data?.coffeeCategories?.edges?.map(({node}) => node);
    console.log(categoriesResponse);
    setCategories(
      fetchingMore ? [...categories, ...newCategories] : newCategories,
    );
    setCategoriesPageInfo(categoriesResponse?.data?.coffeeCategories?.pageInfo);
    if (!fetchingMore) {
      setActiveIndex(0);
    }
    setCategoriesLoading(false);
  };

  useEffect(() => {
    getCategories({fetchingMore: false});
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    if (activeIndex !== null) {
      getCoffees({
        fetchingMore: false,
        refreshing: false,
        signal: controller.signal,
      });
    }
    return () => controller.abort();
  }, [activeIndex, searchString]);

  return {
    coffees,
    coffeesPageInfo,
    categories,
    searchString,
    getCategories,
    activeIndex,
    setSearchString,
    categoriesLoading,
    coffeesLoading,
    setActiveIndex,
    getCoffees,
    categoriesPageInfo,
  };
};
