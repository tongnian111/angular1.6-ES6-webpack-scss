function exampleService($state) {
  return {
    title: () => $state.current.name,
    list:['a','b','c','d','e']
  }

}
/* @ngInject */
export default exampleService;
