import { create } from "zustand";

const useJobStore = create((set) => ({
  allJobs: [],
  jobs: [],
  setAllJobs: (data) =>
    set(() => ({
      allJobs: data,
      jobs: data, // Show all by default
    })),
  setJobs: (filteredJobs) =>
    set(() => ({
      jobs: filteredJobs,
    })),
  resetJobs: () =>
    set((state) => ({
      jobs: state.allJobs,
    })),
}));

export default useJobStore;
