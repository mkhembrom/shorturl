import create from 'zustand'

const useUrlStore = create((set) => ({
  urlText: "",
  onUrlChange: (x) => set((state) => ({ urlText: x })),
}))

export default useUrlStore