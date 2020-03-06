import { ICardProps } from "./ICardProps";

export interface IImageListProps{
    imageListType: string;
    imageListUrl: string;
    data: ICardProps[];
    isError: boolean;
    isLoading: boolean;
}