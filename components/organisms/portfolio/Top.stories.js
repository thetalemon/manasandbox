
import Top from './Top.vue'
// export default {
//   title: 'Top',
//   component: Top,
//   argTypes: {}
// }

// // exportすることでコンポーネントを登録
// export const TopTemplate = (arg, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   template: '<top />'
// })

// import Card from './Card.vue'

export default {
  title: 'Top'
}

export const Normal = () => ({
  components: { Top },
  template: '<top />'
})
