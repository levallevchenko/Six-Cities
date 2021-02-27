export const ActionType = {
  CHANGE_CITY: `city/changeCity`,
  CHANGE_SORTING: `sorting/changeSorting`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSorting: (sorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sorting
  })
};
