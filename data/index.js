import { nsw } from './states/nsw.js'
import { vic } from './states/vic.js'
import { qld } from './states/qld.js'
import { wa } from './states/wa.js'
import { sa } from './states/sa.js'
import { tas } from './states/tas.js'
import { act } from './states/act.js'
import { nt } from './states/nt.js'

export const ALL_STATES = [nsw, vic, qld, wa, sa, tas, act, nt]
export const STATE_SLUGS = ALL_STATES.map(s => s.slug)
