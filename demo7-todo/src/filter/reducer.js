export default (state,action) => ({
    ...state,
    filter:action.filterName
})