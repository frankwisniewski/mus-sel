var $ = (function () {  
  class _{
    constructor(sel){
      this.els = 
      (sel === 'document') ? [document] : 
      (sel === 'window') ? [window] : 
      (sel.nodeType) ? [sel] :
      document.querySelectorAll(sel)
    }
    addClass = c => this.each(function (i) {
      i.classList.add(...c.split(',').map(s => s.trim()))}, this)  
    addStyle = s => this.each(e => e.setAttribute('style', 
      (e.getAttribute(`style`)==null)? s : e.getAttribute(`style`)+s), this)
    addOptions = o => this.each ( i => o.forEach((el,key) => i[key] = new Option(el,el)),this)   
    afterHtml = h => this.each( i => i.insertAdjacentHTML('afterend',h),this)
    beforeHtml = h => this.each( i => i.insertAdjacentHTML('beforebegin',h),this)
    click = cb => this.each(i => i.addEventListener('click', cb),this)
    create(t){
      let newNode = document.createElement(t)
      this.els[0].appendChild(newNode)
      return $(newNode)}
    each = cb => (this.els.forEach( i => cb(i)), this)
    find = e => $(this.els[0].querySelector(e))
    getData = a => this.els[0].getAttribute('data-' + a)
    getValue = e => this.els[0].value
    hasClass = c => this.els[0].classList.contains(c)
    hasDataAtt = a => a in this.els[0].dataset
    insHtml = h => this.each( i => i.insertAdjacentHTML('beforeEnd',h), this)
    html = h => this.each( i => i.innerHTML = h, this)
    last = () => this.els[this.els.length-1]
    on = (e,cb) => this.each(i => i.addEventListener(e, cb), this)
    removeClass = c => this.each( e =>
      e.classList.remove(...c.split(',').map(s => s.trim())),this)
    toggleClass = c => this.each(e => e.classList.toggle(c),this)
    getParent = e => $(this.els[0].parentNode)
    removeStyle = () => this.each(e => e.removeAttribute('style'), this)
    setData = (k,v) => (this.els[0].dataset[k]=v, this)
    style = s => this.each(e => e.setAttribute('style',s), this)
    value = v => this.each( i => i.value=v, this)
    v = v => this.els[v||0]
  }
  return sel => new _(sel)
})();
