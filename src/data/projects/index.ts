import { EnumProject } from '@/enums/projects';
import { IProject } from '@/types/project';
import { TSMC } from './tsmc';
import { THLK } from './thlk';
import { CPF_EDM } from './cpf-edm';
import { LOGICARD_DUEL } from './logicard-duel';
import { IKEA } from './ikea';
import { CNC_MES } from './cnc-mes';
import { WELCABIN_ADMIN } from './welcabin-admin';
import { WELCABIN_PASSENGER_LIFF } from './welcabin-passenger-liff';
import { DICE_ROLLER } from './dice-roller';
import { TECH_BLOG } from './tech-blog';
import { HT_GAME_BACKSTAGE } from './ht-game-backstage';
import { ASINK_EIP } from './asink-eip';
import { ATRUSTEK_WEB } from './atrustek-web';
import { INVESTMENT_PORTFOLIO } from './investment-portfolio';
import { LOOPBACK4_APP } from './loopback4-app';
import { FUTURE_INTERSECTION } from './future-intersection';
import { AI_WRITER } from './ai-writer';
import { SQUASH_RESERVATION } from './squash-reservation';

export const Projects: Record<EnumProject, IProject> = {
    [EnumProject.TSMC]: TSMC,
    [EnumProject.THLK]: THLK,
    [EnumProject.CPF_EDM]: CPF_EDM,
    [EnumProject.LOGICARD_DUEL]: LOGICARD_DUEL,
    [EnumProject.IKEA]: IKEA,
    [EnumProject.CNC_MES]: CNC_MES,
    [EnumProject.WELCABIN_ADMIN]: WELCABIN_ADMIN,
    [EnumProject.WELCABIN_PASSENGER_LIFF]: WELCABIN_PASSENGER_LIFF,
    [EnumProject.DICE_ROLLER]: DICE_ROLLER,
    [EnumProject.TECH_BLOG]: TECH_BLOG,
    [EnumProject.HT_GAME_BACKSTAGE]: HT_GAME_BACKSTAGE,
    [EnumProject.ASINK_EIP]: ASINK_EIP,
    [EnumProject.ATRUSTEK_WEB]: ATRUSTEK_WEB,
    [EnumProject.INVESTMENT_PORTFOLIO]: INVESTMENT_PORTFOLIO,
    [EnumProject.LOOPBACK4_APP]: LOOPBACK4_APP,
    [EnumProject.FUTURE_INTERSECTION]: FUTURE_INTERSECTION,
    [EnumProject.AI_WRITER]: AI_WRITER,
    [EnumProject.SQUASH_RESERVATION]: SQUASH_RESERVATION,
};
