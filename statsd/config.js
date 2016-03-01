{
  port: 8125,
  mgmt_port: 8126,

  percentThreshold: [ 50, 75, 90 ],

  graphitePort: 2003,
  graphiteHost: "127.0.0.1",
  flushInterval: 10000,
  
  deleteTimers: true,
  deleteCounters: true,

  backends: ['./backends/graphite'],
  graphite: {
    legacyNamespace: false
  }
}
