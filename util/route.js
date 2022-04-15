class HashRouter {
  constructor() {
    this.currentPath = 'imageCut';
    this.routes = {}
  }
  init() {
    window.addEventListener('DOMContentLoaded', this.updateView.bind(this))
    window.addEventListener('hashchange', this.updateView.bind(this))
  }
  updateView() {
    this.currentPath = location.hash.substring(1) || 'imageCut'
    this.routes[this.currentPath] && this.routes[this.currentPath]()
    // console.log(this.currentPath,this.routes[this.currentPath],this.routes)
  }
  route(path, callback) {
    this.routes[path] = callback
  }
}
const router = new HashRouter();

[].forEach.call(myTab.children, function (item) {
  const i = item.children[0].href.split('#')[1];
  const d = document.getElementById(`${i}`);
  router.route(`${i}`, () => {
    myTabContent.innerHTML = d.innerHTML;
  })
})


router.init();