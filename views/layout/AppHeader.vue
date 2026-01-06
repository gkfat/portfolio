<template>
    <v-fade-transition>
        <v-app-bar
            v-show="show"
            app
            flat
        >
            <v-container fluid>
                <v-row no-gutters class="align-center flex-nowrap">
                    <v-col cols="auto">
                        <Logo />
                    </v-col>
    
                    <v-spacer />
    
                    <v-col class="d-none d-sm-block" cols="auto">
                        <v-btn
                            v-for="(item, i) of navigation"
                            :key="item.anchor"
                            variant="plain"
                            class="px-2"
                            :ripple="false"
                            @click="onNavClick(item.anchor)"
                        >
                            <span class="text-secondary me-1">0{{ i + 1 }}.</span>
                            <span class="text-primary">{{ item.name }}</span>
                        </v-btn>

                        <v-btn
                            variant="outlined"
                            class="ml-2 border"
                            color="primary"
                            prepend-icon="mdi-view-dashboard"
                            to="/works"
                        >
                            作品集
                        </v-btn>
                    </v-col>

                    <v-col class="d-block d-sm-none" cols="auto">
                        <MenuBtn />
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
    </v-fade-transition>

    <!-- Mobile Navigation Sheet -->
    <v-sheet
        class="w-75 position-fixed top-0 right-0 bottom-0 mobile-nav-sheet"
        :style="{
            transform: drawer ? '' : 'translateX(100%)',
            transition: 'all 0.3s',
            overflowY: 'auto',
        }"
    >
        <v-list class="fill-height">
            <v-container>
                <div class="py-10">
                    <v-list-item
                        v-for="(item, i) of navigation"
                        :key="item.anchor"
                        variant="plain"
                        :ripple="false"
                        class="opacity-100 text-white my-3"
                        @click="onNavClick(item.anchor)"
                    >
                        <p class="text-center">0{{ i + 1 }}.</p>
                        <p class="text-center">{{ item.name }}</p>
                    </v-list-item>
                        
                    <v-divider class="my-5" color="white"/>

                    <v-list-item
                        title="作品集"
                        to="/works"
                        :ripple="false"
                        variant="outlined"
                        color="primary"
                        rounded
                        class="text-center my-3"
                        @click="toggleMobileMenu(false)"
                    />
                </div>
            </v-container>
        </v-list>
    </v-sheet>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import Logo from '~/components/ui/Logo.vue';
import MenuBtn from '~/components/ui/MenuBtn.vue';

const {
    drawer, navigation, onNavClick, toggleMobileMenu,
} = useNavigator();
const { smAndUp } = useDisplay();

// 儲存原始滾動位置
let scrollPosition = 0;

// 監聽 drawer 狀態來控制背景模糊和滾動
watch(drawer, (isOpen) => {
    if (isOpen) {
        // 記錄當前滾動位置
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // 強制禁止滾動的多重方式
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.documentElement.style.overflow = 'hidden';
        
        // 為頁面內容添加模糊效果，排除 header 和 nav sheet
        const mainContent = document.querySelector('main, .v-main, [data-app-main]');
        if (mainContent) {
            mainContent.style.filter = 'blur(3px)';
            mainContent.style.transition = 'filter 0.3s ease';
            mainContent.style.pointerEvents = 'none';
        }
        
        // 為其他可能的內容容器添加模糊
        const layouts = document.querySelectorAll('.layout:not(.mobile-nav-sheet), .page-content');
        layouts.forEach(element => {
            element.style.filter = 'blur(3px)';
            element.style.transition = 'filter 0.3s ease';
            element.style.pointerEvents = 'none';
        });
    } else {
        // 恢復滾動並移除模糊
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        
        // 恢復滾動位置
        window.scrollTo(0, scrollPosition);
        
        const mainContent = document.querySelector('main, .v-main, [data-app-main]');
        if (mainContent) {
            mainContent.style.filter = '';
            mainContent.style.pointerEvents = '';
        }
        
        const layouts = document.querySelectorAll('.layout:not(.mobile-nav-sheet), .page-content');
        layouts.forEach(element => {
            element.style.filter = '';
            element.style.pointerEvents = '';
        });
    }
});

// 組件卸載時清理
onUnmounted(() => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.documentElement.style.overflow = '';
    
    const mainContent = document.querySelector('main, .v-main, [data-app-main]');
    if (mainContent) {
        mainContent.style.filter = '';
        mainContent.style.pointerEvents = '';
    }
    const layouts = document.querySelectorAll('.layout:not(.mobile-nav-sheet), .page-content');
    layouts.forEach(element => {
        element.style.filter = '';
        element.style.pointerEvents = '';
    });
});

const show = ref(true);
const lastScrollY = ref(0);
const SCROLL_THRESHOLD = 10;

const handleScroll = () => {
    // Mobile 始終顯示
    if (!smAndUp.value) return;

    const currentScrollY = window.scrollY;
    const scrollDiff = Math.abs(currentScrollY - lastScrollY.value);
    
    // 滾動差距小於閾值時不處理
    if (scrollDiff < SCROLL_THRESHOLD) return;
    
    if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
        // 往下滾動且超過 100px 時隱藏
        show.value = false;
    } else if (currentScrollY < lastScrollY.value) {
        // 往上滾動時顯示
        show.value = true;
    }
    
    // 當滾動到頂部時始終顯示
    if (currentScrollY <= 50) {
        show.value = true;
    }
    
    lastScrollY.value = currentScrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 確保 header 在最高層級，不被模糊影響 */
:deep(.v-app-bar) {
    filter: none !important;
}

/* Mobile nav sheet 確保不被模糊效果影響 */
.mobile-nav-sheet {
    z-index: 1000 !important;
    filter: none !important;
}

/* 防止 nav sheet 內部元素被模糊 */
:deep(.mobile-nav-sheet *) {
    filter: none !important;
}
</style>
