import { Product } from './../../core/models/product';
import { Brand } from './../../core/models/brand';
import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';
import { Taxonomy } from '../../core/models/taxonomy';
import { RatingOption } from '../../core/models/rating_option';

// Base product state selector function
export function getProductState(state: AppState): ProductState {
  return state.products;
}

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState) {
  const ids = state.productIds as unknown as string[];
  const productEntities = state.productEntities as unknown as {number: Product};
  return ids.map(id => productEntities[id]);
}

export function fetchAllTaxonomies(state: ProductState) {
  return state.taxonomies as unknown as Taxonomy[];
}

const fetchSelectedProduct = function (state: ProductState) {
  return state.selectedProduct;
};

const fetchAllProductSearch = function (state: ProductState) {
  return state.showAllProducts.toJS();
};

const fetchReletedProducts = function (state: ProductState) {
  return state.relatedProducts.toJS();
};
const fetchProductReviews = function (state: ProductState) {
  return state.productReviews.toJS();
};

const fetchRootTaxonId = function (state: ProductState) {
  return state.rootTaxonomyId;
};

const fetchBrands = function (state: ProductState) {
  return state.brands as unknown as Brand[];
};

const fetchProductRatingOptions = function (state: ProductState) {
  return state.productRatingOptions as unknown as RatingOption[];
};

const fetchIsReviewSubmitted = function (state: ProductState) {
  return state.isReviewSubmitted;
};
// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);
export const getTaxonomies = createSelector(getProductState, fetchAllTaxonomies);
export const showAllProducts = createSelector(getProductState, fetchAllProductSearch);
export const relatedProducts = createSelector(getProductState, fetchReletedProducts);
export const productReviews = createSelector(getProductState, fetchProductReviews);
export const rootTaxonomyId = createSelector(getProductState, fetchRootTaxonId);
export const getBrands = createSelector(getProductState, fetchBrands);
export const getProductRatingOptions = createSelector(getProductState, fetchProductRatingOptions);
export const getIsReviewSubmitted = createSelector(getProductState, fetchIsReviewSubmitted);

