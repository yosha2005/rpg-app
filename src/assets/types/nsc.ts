import { nahkampfwaffe, fernkampfwaffe } from "./waffen";

export interface nsc {
    name: string;

    // Eigenschaften
    mu: number;
    kl: number;
    in: number;
    ch: number;
    ff: number;
    ge: number;
    ko: number;
    kk: number;

    // Wichtige Werte
    lep: number;
    asp: number;
    kap: number;
    ini: number;
    rs: number;
    be: number;
    sk: number;
    zk: number;
    gs: number;
    aw: number;

    nahkampfwaffen: nahkampfwaffe[];
    fernkampfwaffen: fernkampfwaffe[];

    aktionen: number;
    groesse: string;
}