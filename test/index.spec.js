/* eslint-env mocha */
'use strict'

const DaemonFactory = require('ipfsd-ctl')
const df = DaemonFactory.create()
const expect = require('chai').expect
const LocationsPoller = require('../src')

const examples = [
  {
    address: '/ip4/8.8.8.8',
    res: {
      country_name: 'United States',
      country_code: 'US',
      region_code: 'CA',
      city: 'Mountain View',
      postal_code: 94040,
      latitude: 37.386,
      longitude: -122.0838,
      metro_code: 807,
      area_code: 650,
      planet: 'Earth',
      formatted: 'Mountain View, CA, United States, Earth'
    }
  }
]

describe('locations poller', () => {
  let ipfsd
  let poller

  before(function (done) {
    // CI takes longer to instantiate the daemon,
    // so we need to increase the timeout for the
    // before step
    this.timeout(60 * 1000)

    df.spawn({disposable: true}, (err, node) => {
      expect(err).to.be.null // eslint-disable-line no-unused-expressions
      ipfsd = node

      poller = new LocationsPoller(node.api)
      done()
    })
  })

  after(function (done) {
    this.timeout(15 * 1000)
    ipfsd.stop(done)
  })

  it('get immediate', function (done) {
    const res = poller.getImmediate(examples[0].address)
    expect(res).to.have.property('formatted')
    expect(res.formatted).to.be.eq('Unknown')
    done()
  })

  it('get', function (done) {
    poller.get(examples[0].address).then(res => {
      expect(res).to.be.eql(examples[0].res)
      done()
    })
  })
})
