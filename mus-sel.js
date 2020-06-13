var $ = (function (sel = null) {  
  class _{
    constructor(sel){
      if (sel){
      this.els = 
        (sel === 'document') ? [document] : 
        (sel === 'window') ? [window] : 
        (sel.nodeType) ? [sel] :
        document.querySelectorAll(sel)
      }
    }
    //Vars
    version = '☕ 0.000001'
    //utility functions
    insSheet = sheet => $(document.head).create('style').toNode().sheet.insertRule(sheet)
    //functions for Nodes!
    addClass = c => this.each(function (i) { i.classList.add(...c.split(',').map(s => s.trim()))}, this)  
    addOptions = o => this.each ( i => o.forEach((el,key) => i[key] = new Option(el,el)),this) 
    addStyle = s => this.each(e => e.setAttribute('style', 
      (e.getAttribute(`style`)==null)? s : e.getAttribute(`style`)+s), this)
    afterHtml = h => this.each( i => i.insertAdjacentHTML('afterend',h),this)
    append = (e,n) => $(e).toNode().appendChild(n) 
    beforeHtml = h => this.each( i => i.insertAdjacentHTML('beforebegin',h),this)
    click = cb => this.each(i => i.addEventListener('click', cb),this)
    create = t => $(this.els[0].appendChild(document.createElement(t)))
    each = cb => (this.els.forEach( i => cb(i)), this)
    find = e => $(this.els[0].querySelector(e))
    getData = a => this.els[0].getAttribute('data-' + a)
    getParent = e => $(this.els[0].parentNode)
    getValue = e => this.els[0].value
    hasClass = c => this.els[0].classList.contains(c)
    hasDataAtt = a => a in this.els[0].dataset
    html = h => this.each( i => i.innerHTML = h, this)
    insHtml = h => this.each( i => i.insertAdjacentHTML('beforeEnd',h), this)
    last = () => this.els[this.els.length-1]
    on = (e,cb) => this.each(i => i.addEventListener(e, cb), this)
    parentEl = c => $(this.els[0].closest(c))
    removeClass = c => this.each( e => e.classList.remove(...c.split(',').map(s => s.trim())),this)
    removeStyle = () => this.each(e => e.removeAttribute('style'), this)
    resetStyles = () => this.each(e => e.setAttribute('style','all:unset;'), this)
    setData = (k,v) => (this.els[0].dataset[k]=v, this)
    setDataAll = (k,v) => this.each(e => e.dataset[k]=v, this)
    style = s => this.each(e => e.setAttribute('style',s), this)
    toggleClass = c => this.each(e => e.classList.toggle(c),this)   
    toNode = n => this.els[0]
    value = v => this.each( i => i.value=v, this)
  }
  return sel => new _(sel)
})();
