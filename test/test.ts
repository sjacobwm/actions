import * as chai from "chai"
import * as winston from "winston"
import ChaiHttp = require("chai-http")
import chaiAsPromised = require("chai-as-promised")

chai.use(ChaiHttp)
chai.use(chaiAsPromised) // should be last
winston.remove(winston.transports.Console)

import "../src/integrations/index"

import "./test_server"
import "./test_smoke"

import "./integrations/test_segment"
