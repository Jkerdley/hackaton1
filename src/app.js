import { menu } from './constants/contsants'
import './styles.css'

import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { FortuneCookies } from './modules/fortuneСookies.module'
import { HeadingModule } from './modules/heading.module'
import { ShapeModule } from './modules/shape.module'

// Menu
menu.add(new BackgroundModule())
menu.add(new ClicksModule())
menu.add(new ShapeModule())
menu.add(new HeadingModule())
menu.add(new FortuneCookies())
