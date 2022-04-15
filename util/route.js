class HashRouter {
  constructor() {
    this.currentPath = '/';
    this.routes = {}
  }
  init() {
    window.addEventListener('DOMContentLoaded', this.updateView.bind(this))
    window.addEventListener('hashchange', this.updateView.bind(this))
  }
  updateView() {
    this.currentPath = location.hash.substring(1) || '/'
    this.routes[this.currentPath] && this.routes[this.currentPath]()
  }
  route(path, callback) {
    this.routes[path] = callback
  }
}

const router = new HashRouter();
router.init();
[].forEach.call(myTab.children, function (item) {
  const i = item.children[0].href.split('#')[1];
  const d = document.getElementById(`${i}`);
  router.route(`${i}`, () => {
    myTabContent.innerHTML = d.innerHTML;
  })
})