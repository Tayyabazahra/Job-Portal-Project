export const HOST = import.meta.env.VITE_SERVER_URL || "http://localhost:8000";

// JOB ROUTES
export const JOB_ROUTES = `${HOST}/api/jobs`;
export const FILTER_JOBS_ROUTE = `${JOB_ROUTES}/filter`;
export const JOB_BY_ID_ROUTE = (id) => `${JOB_ROUTES}/${id}`;
export const SIMILAR_JOBS_ROUTE = (id) => `${JOB_ROUTES}/${id}/similar`;

// AUTH ROUTES
export const AUTH_ROUTES = `${HOST}/auth`;
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;

// GOOGLE AUTH REDIRECTS
export const GOOGLE_SIGNUP_ROUTE = `${AUTH_ROUTES}/google?state=signup`;
export const GOOGLE_LOGIN_ROUTE = `${AUTH_ROUTES}/google?state=login`;


export const JOBS_ROUTE = `${HOST}/api/jobs`;
export const GET_JOB_BY_ID = (id) => `${HOST}/api/jobs/${id}`;
export const GET_SIMILAR_JOBS = (id) => `${HOST}/api/jobs/${id}/similar`;
