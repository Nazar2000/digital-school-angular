export interface MaterialsForUnity {
    product: string | number;
    materials: [{ mesh: string, material: string }];
}

export interface ColorsForUnity {
    meshes_color: [{
        mesh: string;
        mat_color: string;
    }];
}
