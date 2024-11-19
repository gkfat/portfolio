<template>
    <p class="text-h5 font-weight-bold text-warning">
        {{ `${formatDuration(props.timeRange).years} ${t('common.year')}` }}
        <span v-if="formatDuration(props.timeRange).months > 0">
            {{ `${formatDuration(props.timeRange).months} ${t('common.month')}` }}
        </span>
    </p>
    <em class="text-secondary font-weight-bold text-caption">
        {{ formatTimeRange(props.timeRange) }}
    </em>
</template>

<script lang="ts" setup>
import { ConfigType } from 'dayjs';
import { useI18n } from 'vue-i18n';

import {
    createDate,
    humanReadable,
} from '@/utils/time';

const { t } = useI18n();
const props = defineProps<{
    timeRange: { startDate: ConfigType, endDate: ConfigType }
}>();

const formatDuration = (timeRange: { startDate: ConfigType, endDate: ConfigType }) => {
    const {
        startDate,
        endDate,
    } = timeRange;

    const start = createDate(startDate);
    const end = createDate(endDate);

    const yearsDiff = end.diff(start, 'year');
    const monthsDiff = end.diff(start.add(yearsDiff, 'year'), 'month');

    return {
        years: yearsDiff,
        months: monthsDiff,
    };
};

const formatTimeRange = (timeRange: { startDate: ConfigType, endDate: ConfigType }) => {
    const {
        startDate,
        endDate,
    } = timeRange;

    const end = createDate(endDate);
    const current = createDate();

    const isCurrent = end.diff(current, 'day') === 0;

    return isCurrent
        ? `${humanReadable(startDate)} ~ ${t('common.current')}`
        : `${humanReadable(startDate)} ~ ${humanReadable(endDate)}`;
};
</script>
