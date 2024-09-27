import { Store, defineStore } from 'pinia'

type TStoreBaseState = {
    loading: boolean | null
    watermark: string | string[]
    fonts: string[]
}

type TUserAction = {
    hideLoading: () => void
    setFonts: (list: string[]) => void
    changeWatermark: (e: string[] | string) => void
}

const useBaseStore = defineStore<'base', TStoreBaseState, {}, TUserAction>('base', {
    state: () => ({
        loading: null,
        watermark: ['迅排设计', 'poster-design'],
        fonts: [], // 缓存字体列表
    }),

    actions: {
        hideLoading() {
            setTimeout(() => {
                this.loading = false
            }, 600)
        },

        setFonts(list: string[]) {
            this.fonts = list
        },

        changeWatermark(wm: any) {
            this.watermark = wm
        }
    }
})

export type TBaseStore = Store<'base', TStoreBaseState, {}, TUserAction>

export default useBaseStore