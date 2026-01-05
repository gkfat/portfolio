import type { NavigationItem } from '~/types/index';

const drawer = ref(false);

export function useNavigator() {
    const route = useRoute();
    const router = useRouter();

    // 導航項目配置
    const navigation: NavigationItem[] = [
        {
            name: '精選作品',
            anchor: '#features',
        },
        {
            name: '關於我', 
            anchor: '#about',
        },
        {
            name: '工作經歷',
            anchor: '#experience',
        },
        {
            name: '聯絡我',
            anchor: '#contact',
        },
    ];

    // 切換 mobile menu
    const toggleMobileMenu = (which?: boolean) => {
        if (typeof which === 'boolean') {
            drawer.value = which;
        } else {
            drawer.value = !drawer.value;
        }
    };

    // 滾動到指定錨點
    const scrollToAnchor = (anchor: string) => {
        const target = document.querySelector(anchor);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // 導航點擊處理 - 支援跨頁面導航
    const onNavClick = async (anchor: string) => {
        // 立即關閉 mobile drawer
        drawer.value = false;
        
        if (route.fullPath !== '/home') {
            // 跳轉到 home 頁面
            await router.push('/home');
            // 等待 DOM 更新
            await nextTick();
        }
            
        // 使用 setTimeout 確保頁面完全載入後再滾動
        setTimeout(() => {
            scrollToAnchor(anchor);
        }, 150);
    };

    return {
        // 狀態
        drawer: readonly(drawer),
        navigation,
        
        // 方法
        toggleMobileMenu,
        scrollToAnchor,
        onNavClick,
    };
};