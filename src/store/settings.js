 
const state = {
    title: '',
    dynamicTitle: true
}
 
const actions = {
    // 设置网页标题
    setTitle({ commit }, title) {
        state.title = title
    }
}
 
export default {
    namespaced: true,
    state,
    actions
}