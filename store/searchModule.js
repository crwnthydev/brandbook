const books = [
    {
      id: 1,
      title: 'Фирменный стиль',
      name: 'style',
      address: '/style',
      data: {
        slides: [
          {
            hash: '#graphicsymbol',
            id: 10,
            name: 'Графический знак ',
            value: 'Существует в двух вариациях, каждая из которых имеет свои рекомендации по применению. С заливкой: Подходит для размещения: на контрастной подложке: светлый знак размещается на тёмном фоне и наоборот на любом типе поверхности на макете с множеством деталей: значок с заливкой смотрится более нейтрально и позволяет сбалансировать контент. Линейный: выглядит более современно и аккуратно, но применим не ко всем макетам рекомендован для размещения на темных и бежевых фонах, особенно если в макете используется паттерн более практичен: его проще распечатать на некоторых носителях, например, на стикерах предпочтителен для печати в одну краску'
          },
          {
            hash: '#signature',
            id: 11,
            name: 'Фирменная надпись ',
            value: 'Универсальный вариант, который меньше ограничен в использовании и легко масштабируется. Фирменная надпись проста в применении, но предпочтение ей отдают не только поэтому. Такой графический приём имеет место, если: линии не взаимодействуют с паттерном: либо одно, либо другое; акцент на носителе нужно сделать именно на полезную информацию, а не на логотип'
          },
          {
            id: 12,
            hash: '#generalrule',
            name: 'Общие правила использования ',
            value: 'И фирменную надпись, и графический знак можно произвольно использовать отдельно как самостоятельные логотипы, даже в рамках одного макета. Основное правило при использовании знака — сохранение читаемости текста Gym & Fitness внутри него. Для этого необходимо следить, чтобы фон был достаточно контрастным, а логотип — не слишком мелким. Как правило, один и тот же цвет применяется и для графического знака, и для фирменной надписи. В редких случаях допускается менять цвет знака или его поворот относительно фирменной надписи. Графический знак с чёрной заливкой на тёмном фоне рекомендуется использовать в первую очередь для цифровых носителей. Использование для печатных носителей допустимо, однако перед печатью основного тиража следует проводить цветопробу. В информационных макетах (любые макеты, где контент не ограничивается только логотипом) соблюдается принцип цветового контраста. Чаще всего контент подразделяется по степени важности. На тёмных фонах это демонстрируется с помощью белого и бежевого цветов: бренд уходит на второй план и получает бежевый оттенок, тем самым подчёркивая и дополняя ключевое сообщение, которое демонстрируется белым. На белом фоне главное сообщение выделяется ярким чёрным цветом, а бренд-инфо — бежевым. Когда логотип или графический знак — единственный элемент оформления, его лучше окрашивать в белый цвет. В таком исполнении он выглядит заметней и фокусирует на себе внимание. Особенно это актуально для имиджевых носителей, например, вывесок.'
          },
          {
            hash: '#pattern',
            id: 13,
            name: 'Паттерн ',
            value: 'В качестве визуалов Спортлайф использует паттерн, основанный на геометрических фигурах. Паттерн является стилеобразующими для айдентики, используется в различных элементах фирменного стиля: печатной продукции, рекламных материалах, интерьере. Паттерн работает как полноценная часть стиля бренда, может применяться самостоятельно. Однако многослойные композиции смотрятся эффектнее: паттерн можно использовать в связке с типографикой, и допустимо размещать поверх фотографий и видео. Фирменный стиль включает в себя ряд заготовок, которые можно использовать как есть, или же модифицировать и комбинировать на свое усмотрение. Это позволяет быстро получать различные дизайнерские решения, которые будут выглядеть комплексно и при этом не выходить за рамки айдентики.'
          },
          {
            hash: '#decoratives',
            id: 14,
            name: 'Декоративные линии ',
            value: 'Иногда бывают ситуации, когда паттерн не очень хорошо смотрится на макете, или же встречается слишком часто. Именно для таких случаев предусмотрены декоративные линии: либо множество параллельных, либо две пересекающихся.'
          },
          {
            hash: '#typo',
            id: 15,
            name: 'Типографика ',
            value: 'В рамках фирменного стиля создан набор десятичных цифр — их можно использовать в макетах в качестве самостоятельных элементов оформления. Помимо цифр можно также использовать отдельно и буквы из логотипа. Все литеры — харáктерные и легкоузнаваемые.'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Логотип',
      name: 'logo',
      address: '/logo',
      data: {
        slides: [
          {
            id: 20,
            name: 'Полноцветная версия ',
            value: 'Стандартный логотип для использования в подавляющем большинстве случаев.'
          },
          {
            id: 21,
            name: 'Линейная версия ',
            value: 'Предпочтительная версия логотипа, однако '
          },
          {
            id: 22,
            name: 'Монохромная версия ',
            value: 'Используется только в случае физической невозможности реализовать цветную версию на носителе'
          },
          {
            id: 23,
            name: 'Композиция логотипа ',
            value: 'Фирменная надпись и графический знак — два элемента, образующие композицию. И фирменную надпись, и графический знак можно произвольно использовать отдельно как самостоятельные логотипы, даже в рамках одного макета. Однако при размещении рядом следует воспользоваться уже готовой композицией.'
          },
          {
            id: 24,
            name: 'Построение логотипа ',
            value: 'Логотип всегда берётся из готового файла, а не строится с нуля. Тем не менее, сетка построения может пригодиться в различных прикладных ситуациях, — например, для анимации или увеличения детализации 3D-модели.'
          },
          {
            id: 24,
            name: 'Охранное поле ',
            value: 'Минимальный запас пространства, необходимый вокруг логотипа. Этот запас также необходимо соблюдать при размещении логотипа вплотную к краям макета. Запрещено менять пропорции логотипа.'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Цвета',
      name: 'colors',
      address: '/colors',
      data: {
        slides: [
          {
            id: 30,
            name: 'Hex',
            value: ''
          },
          {
            id: 31,
            name: 'RGB',
            value: ''
          },
          {
            id: 32,
            name: 'CMYK',
            value: ''
          },
          {
            id: 33,
            name: 'Pantone',
            value: ''
          },
          {
            id: 34,
            name: 'Бежевый',
            value: ''
          },
          {
            id: 35,
            name: 'Чёрный',
            value: ''
          },
          {
            id: 36,
            name: 'Белый',
            value: ''
          },
          {
            id: 37,
            name: 'Дополнительный бежевый',
            value: ''
          },
          {
            id: 38,
            name: 'Дополнительный бежевый II',
            value: ''
          },
          {
            id: 39,
            name: 'Дополнительный чёрный I',
            value: ''
          },
          {
            id: 310,
            name: 'Дополнительный чёрный II',
            value: ''
          },
          {
            id: 311,
            name: 'Дополнительный серый',
            value: ''
          },
          {
            id: 312,
            name: 'Основные цвета ',
            value: 'Каждый макет следует стремиться оформлять только с помощью этих цветов.'
          },
          {
            id: 313,
            name: 'Дополнительные цвета ',
            value: 'Если макет невозможно создать с использованием только основных цветов, допускается добавление произвольного количества дополнительных.'
          }
        ]
      }
    }
]
export const searchModule = {
    state: () => ({
        searchData: books
    }),
    namespaced: true
}