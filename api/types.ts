export type ResponseType = {
    photos: ResponsePhotos[];
}
export type ResponsePhotos = {
    id: number;
    sol: number;
    camera: PhotosCamera;
    img_src: string;
    earth_date: string;
    rover: PhotosRover;
}

export type PhotosCamera = {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}
export type PhotosRover = {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: PhotosRoverCameras[];
}

export type PhotosRoverCameras = {
    name: string;
    full_name: string;
}
