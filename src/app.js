import './styles.css'
import { ContextMenu } from './menu'

import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { HeadingModule } from './modules/heading.module'
import { FortuneCookies } from './modules/fortuneСookies.module'
import { TimerModule } from './modules/timer.module'

const menu = new ContextMenu('#menu')

menu.add(new BackgroundModule())
menu.add(new ClicksModule())
menu.add(new ShapeModule())
menu.add(new HeadingModule())
menu.add(new FortuneCookies())
menu.add(new TimerModule())

