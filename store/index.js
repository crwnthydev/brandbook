import { contentModule } from '@/store/contentModule'
import { searchModule } from '@/store/searchModule'

const navList = [
  {
    title: 'Айдентика',
    list: [
      {
        name: 'logoPage',
        subtitle: 'Логотип',
        link: '/logo',
        nextPageData: {
          subtitle: 'Цвета',
          link: '/colors'
        },
        prevPageData: {
            subtitle: 'SMM',
            link: '/smm'
        }
      },
      {
        name: 'colorsPage',
        subtitle: 'Цвета',
        link: '/colors',
        nextPageData: {
          subtitle: 'Типографика',
          link: '/typography'
        },
        prevPageData: {
            subtitle: 'Логотип',
            link: '/logo'
        }
      },
      {
        name: 'typoPage',
        subtitle: 'Типографика',
        link: '/typography',
        nextPageData: {
          subtitle: 'Фирменный стиль',
          link: '/style'
        },
        prevPageData: {
            subtitle: 'Цвета',
            link: '/colors'
        }
      },
      {
        name: 'stylePage',
        subtitle: 'Фирменный стиль',
        link: '/style',
        nextPageData: {
          subtitle: 'Пиктограммы',
          link: '/pictograms'
        },
        prevPageData: {
            subtitle: 'Типографика',
            link: '/typography'
        }
      },
      {
        name: 'pictoPage',
        subtitle: 'Пиктограммы',
        link: '/pictograms',
        nextPageData: {
          subtitle: 'Иллюстрации',
          link: '/illustrations'
        },
        prevPageData: {
            subtitle: 'Фирменный стиль',
            link: '/style'
        }
      },
      {
        name: 'illustrationsPage',
        subtitle: 'Иллюстрации',
        link: '/illustrations',
        nextPageData: {
          subtitle: 'Фотостиль',
          link: '/media'
        },
        prevPageData: {
            subtitle: 'Пиктограммы',
            link: '/pictograms'
        }
      },
      {
        name: 'mediaPage',
        subtitle: 'Фотостиль',
        link: '/media',
        nextPageData: {
          subtitle: 'Правила коммуникаций',
          link: '/rules'
        },
        prevPageData: {
            subtitle: 'Иллюстрации',
            link: '/illustrations'
        }
      },
      {
        name: 'rulesPage',
        subtitle: 'Правила коммуникаций',
        link: '/rules',
        nextPageData: {
          subtitle: 'Офисная айдентика',
          link: '/identica'
        },
        prevPageData: {
            subtitle: 'Фотостиль',
            link: '/media'
        }
      }
    ]
  },
  {
    title: 'Носители бренда',
    list: [
      {
        name: 'identicsPage',
        subtitle: 'Офисная айдентика',
        link: '/identica',
        nextPageData: {
          subtitle: 'Печатная продукция',
          link: '/prints'
        },
        prevPageData: {
            subtitle: 'Правила коммуникаций',
            link: '/rules'
        }
      },
      {
        name: 'printsPage',
        subtitle: 'Печатная продукция',
        link: '/prints',
        nextPageData: {
          subtitle: 'Рекламные материалы',
          link: '/promos'
        },
        prevPageData: {
            subtitle: 'Офисная айдентика',
            link: '/identica'
        }
      },
      {
        name: 'promosPage',
        subtitle: 'Рекламные материалы',
        link: '/promos',
        nextPageData: {
          subtitle: 'Одежда',
          link: '/clothes'
        },
        prevPageData: {
            subtitle: 'Печатная продукция',
            link: '/prints'
        }
      },
      {
        name: 'clothesPage',
        subtitle: 'Одежда',
        link: '/clothes',
        nextPageData: {
          subtitle: 'Клубная атрибутика',
          link: '/club'
        },
        prevPageData: {
            subtitle: 'Рекламные материалы',
            link: '/promos'
        }
      },
      {
        name: 'clubPage',
        subtitle: 'Клубная атрибутика',
        link: '/club',
        nextPageData: {
          subtitle: 'Информационные носители',
          link: '/infomaterials'
        },
        prevPageData: {
            subtitle: 'Одежда',
            link: '/clothes'
        }
      },
      {
        name: 'infomaterialsPage',
        subtitle: 'Информационные носители',
        link: '/infomaterials',
        nextPageData: {
          subtitle: 'Экстерьер',
          link: '/exterior'
        },
        prevPageData: {
            subtitle: 'Клубная атрибутика',
            link: '/club'
        }
      },
      {
        name: 'exteriorPage',
        subtitle: 'Экстерьер',
        link: '/exterior',
        nextPageData: {
          subtitle: 'Сайт',
          link: '/website'
        },
        prevPageData: {
            subtitle: 'Информационные носители',
            link: '/infomaterials'
        }
      },
      {
        name: 'websitePage',
        subtitle: 'Сайт',
        link: '/website',
        nextPageData: {
          subtitle: 'Видео и анимация',
          link: '/animations'
        },
        prevPageData: {
            subtitle: 'Экстерьер',
            link: '/exterior'
        }
      },
      {
        name: 'animationsPage',
        subtitle: 'Видео и анимация',
        link: '/animations',
        nextPageData: {
          subtitle: 'SMM',
          link: '/smm'
        },
        prevPageData: {
            subtitle: 'Сайт',
            link: '/website'
        }
      },
      {
        name: 'smmPage',
        subtitle: 'SMM',
        link: '/smm',
        nextPageData: {
          subtitle: 'Логотип',
          link: '/logo'
        },
        prevPageData: {
            subtitle: 'Видео и анимация',
            link: '/animations'
        }
      }
    ]
  }
]

const pageTitles = {
  indexPage: {
    ru: 'Главная страница',
    en: 'Main page'
  },
  logoPage: {
    ru: 'Логотип',
    en: 'Logotype'
  },
  colorsPage: {
    ru: 'Цвета',
    en: 'Colors'
  },
  typoPage: {
    ru: 'Типографика',
    en: 'Typography'
  },
  stylePage: {
    ru: 'Фирменный стиль',
    en: 'Style'
  },
  pictoPage: {
    ru: 'Пиктограммы',
    en: 'Pictograms'
  },
  illustrationsPage: {
    ru: 'Иллюстрации',
    en: 'Illustrations'
  },
  mediaPage: {
    ru: 'Фотостиль',
    en: 'Media'
  },
  rulesPage: {
    ru: 'Правила<br>коммуникаций',
    en: 'Rules'
  },
  identicsPage: {
    ru: 'Офисная<br>айдентика',
    en: 'Identics'
  },
  printsPage: {
    ru: 'Печатная<br>продукция',
    en: 'Prints'
  },
  promosPage: {
    ru: 'Рекламные<br>материалы',
    en: 'Advertisement'
  },
  clothesPage: {
    ru: 'Одежда',
    en: 'Clothes'
  },
  clubPage: {
    ru: 'Клубная<br>атрибутика',
    en: 'Clyb'
  },
  infomaterialsPage: {
    ru: 'Информационные носители',
    en: 'Informational materials'
  },
  exteriorPage: {
    ru: 'Экстерьер',
    en: 'Exterior'
  },
  websitePage: {
    ru: 'Сайт',
    en: 'Website'
  },
  animationsPage: {
    ru: 'Видео и анимация',
    en: 'Video and animation'
  },
  smmPage: {
    ru: 'SMM',
    en: 'SMM'
  },
  testPage: {
    ru: 'DEV TEST PAGE',
    en: 'DEV TEST PAGE'
  }
}

export const modules = {
  content: contentModule,
  search: searchModule
}

export const state = () => ({
  modals: [],
  navData: navList,
  langs: [
    {
      name: 'Русская версия',
      value: 'ru'
    },
    {
      name: 'English version',
      value: 'en'
    }
  ],
  lang: 'ru',
  currentPage: '',
  titles: pageTitles,
  projectTitle: {
    ru: 'Спортлайф',
    en: 'Sportlife'
  },
  isDropdownVisible: {
    0: false,
    1: false
  },
  playingVideoId: 0
})

export const actions = {
  openModal ({ commit }, id) {
    commit('MODAL_ADD', id)
  },
  closeModal ({ commit }, id) {
    commit('MODAL_REMOVE', id)
  },
  closeAllModals ({ commit }) {
    commit('MODAL_CLEAR')
  },
  getBrowserType ({ commit }) {
    const browser = this.$ua.browser()
    commit('SET_BROWSER', browser)
  },
  getOsType ({ commit }) {
    const os = this.$ua.os()
    commit('SET_OS', os)
  }
}

export const mutations = {
  MODAL_ADD (state, id) {
    state.modals.push(id)
  },
  MODAL_REMOVE (state, id) {
    state.modals = state.modals.filter(i => i !== id)
  },
  MODAL_CLEAR (state) {
    state.modals = []
  },
  SET_LANG (state, newLang) {
    state.lang = newLang
  },
  SET_PAGE(state, page) {
		state.currentPage = page
  },
  STATE_DROPDOWN_TRUE(state, id) {
    state.isDropdownVisible[id] = true
  },
  STATE_DROPDOWN_FALSE(state, id) {
    state.isDropdownVisible[id] = false
  },
  SET_VIDEOS_PAUSED(state, id) {
    state.playingVideoId = id
  }
}

export const getters = {
    playingVideoId: state => {
        return state.playingVideoId
    },
    langUpdate: state => {
        return state.lang
    }
}

export default {
  state,
  actions,
  mutations,
  getters,
  modules
}
