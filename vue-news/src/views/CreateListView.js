import List from './List.vue'

export default function CreateListView() {
  return {
    // 재사용할 인스턴스(컴포넌트) 옴션들이 들어갈 자리
    name,
    render(createElement) {
      return createElement(List);
    }
  }
}