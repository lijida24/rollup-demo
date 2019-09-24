import { version } from '../package.json'

class rollupDemo {
  constructor (data) {
    this.version = version
    this.data = data
  }
  log () {
    // return Promise.resolve(this)
  }
}

export default rollupDemo
