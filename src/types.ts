export interface DiscordInfo {
    channels: Array<any>;
    id: string;
    instant_invite: string;
    members: Array<any>;
    name: string;
    presence_count: number;
}

export interface LiveServerInfo {
    data: ServerInfo;
    teams: {
        0?: Team;
        1?: Team;
        2?: Team;
        3?: Team;
        4?: Team;
    };
}

export interface Team {
    name: string;
    players: Array<RawPlayer>;
}

export interface RawPlayer {
    0: Array<string>;
    1: string;
    2: string;
}

export interface Player {
    clanIcon: string;
    name: string;
}

export interface ServerInfo {
    name: string;
    world: string;
    cnum: number;
    vnum: number;
    cmax: number;
    time: number;
    drx: number;
    ver: string;
    gametype: string;
    needcmdr: number;
    pass: number;
    race1: string;
    race2: string;
    race3?: string;
    race4?: string;
    demo: number;
    pure: number;
    bal: number;
    timelimit: number;
    notes: string;
}

export interface LiveProps {
    server: string;
    name: string;
    background: string;
}

export interface WeeklyChartInfo {
    server: string;
}

export interface DailyChartInfo {
    server: string;
}

export interface WeeklySnapshot {
    timestamp: number;
    online: number;
}

export interface DailySnapshot {
    game_state: number;
    game_time: number;
    map_name: string;
    online: number;
    server_name: string;
    teams: {
        0: DSTeam;
        1: DSTeam;
        2: DSTeam;
        3?: DSTeam;
        4?: DSTeam;
    },
    timestamp: number;
}

export interface DSPlayer {
    clan_id: number;
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    name: string;
    on_team_time: number;
    uid: number;
}

export interface DSPlayer extends DPlayer {
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    on_team_time: number;
}

export interface DPlayer {
    name: string;
    uid: number;
    clan_id: number;
}

export interface DSTeam {
    players: Array<DSPlayer>;
    race: string;
    team_id: number;
    team_name: string;
}

export interface ExtendedGameResult extends GameResult {
    players: Array<EGRPlayer>;
    p_accuracies: Array<ACRPlayer>;
}

export interface ACRPlayer {
    name: string;
    clan_id: number;
    accuracies: Array<AAccuracy>;
    generalDamage: number;
}

export interface AAccuracy {
    name: string;
    value: EGRAccuracy;
}

export interface EGRPlayer {
    accuracy: Array<EGRAccuracy>;
    clan_id: number;
    clan_tag_name: string;
    info: EGRInfo;
    name: string;
    uid: number;
}

export interface EGRAccuracy {
    damage: number;
    deaths: number;
    hits: number;
    kills: number;
    name: string;
    shots: number;
}

export interface EGRInfo {
    auto_buff: number;
    blocks: number;
    build: number;
    build_damage: number;
    build_kill: number;
    carn_hp: number;
    client_damage: number;
    deaths: number;
    experience: number;
    flag_capture: number;
    heal: number;
    jumps: number;
    kill_streak: number;
    kills: number;
    melee_kill: number;
    mine: number;
    money_gained: number;
    money_spent: number;
    npc_damage: number;
    npc_kill: number;
    on_team_time: number;
    order_give: number;
    order_obeyed: number;
    outpost_damage: number;
    peon_damage: number;
    peon_kill: number;
    ranged_kill: number;
    sacrifice: number;
    siege_kill: number;
}

export interface GameResult {
    game: GRGame;
    server_name: string;
    timestamp: number;
    winner: number;
}

export interface GRGame {
    game_state: number;
    game_time: number;
    map_name: string;
    online: number;
    teams: {
        0: GRTeam;
        1: GRTeam;
        2: GRTeam;
        3?: GRTeam;
        4?: GRTeam;
    }
    timestamp: number;
}

export interface GRTeam {
    players: Array<GRPlayer>;
    race: string;
    team_id: number;
    team_name: string;
    commander_name: string;
    commander_clan_id: number;
}

export interface GRPlayer {
    clan_id: number;
    clan_tag_name: string;
    connect_time: number;
    is_commander: boolean;
    name: string;
    on_team_time: number;
    uid: number;
    p: EGRPlayer;
}

export interface WSProps {
    players: Array<ACRPlayer>;
}