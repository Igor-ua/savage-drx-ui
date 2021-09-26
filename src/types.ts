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

export interface WSReduxWrapperTTL extends ReduxWrapperTTL {
    data: Array<WeeklySnapshot>;
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

export interface DSReduxWrapperTTL extends ReduxWrapperTTL {
    data: Array<DailySnapshot>;
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

export interface ReduxWrapperTTL {
    timestamp: number;
    ttl: number;
}

export interface GRReduxWrapperTTL extends ReduxWrapperTTL {
    data: Array<GameResult>;
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
}