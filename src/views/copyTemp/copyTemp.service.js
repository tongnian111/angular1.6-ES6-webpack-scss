function copyTempService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default copyTempService;
