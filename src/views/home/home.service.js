function homeService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default homeService;
