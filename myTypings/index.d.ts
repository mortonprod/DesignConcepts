interface IAnimations {
    name: string;
    end: Array<Array<{ id: string, class: string }>>;
    calls: number;
}

interface IState {
    pos: IVector3d,
    vel: IVector3d,
    charge: number;
    mass: number;
    radius: number;
}

interface IVector3d {
    x: number;
    y: number;
    z: number;
}

interface IDot {
    start: number;
    end: number;
    radius: number;
    colour: string;
}
