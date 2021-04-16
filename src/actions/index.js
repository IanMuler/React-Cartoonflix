export const setFavorite = (payload, profile) => ({
    type: "SET_FAVORITE",
    profile,
    payload,
});

export const deleteFavorite = (payload, profile) => ({
    type: "DELETE_FAVORITE",
    profile,
    payload,
});