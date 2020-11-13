/* eslint-disable import/prefer-default-export */
import { createSelector } from '@reduxjs/toolkit';

export const filmsSelector = createSelector(
  (state) => state.films,
  (films) => films
);
