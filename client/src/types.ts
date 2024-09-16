export interface SearchData {
    email: string;
    number?: string;
}

export interface ResultData extends Required<SearchData>{}

export interface InputData {
    value: string;
    onChange: OnChange;
}


export interface SearchResultProps {
    data: ResultData[] | undefined;
}
  

export interface SearchResultData {
    message: string; 
    data?: ResultData; 
}
  
export type OnChange = (value: string) => void

type SetDataType = React.Dispatch<React.SetStateAction<ResultData[] | undefined>>;
type SetErrorType = React.Dispatch<React.SetStateAction<string | null>>;
type SetLoadingType = React.Dispatch<React.SetStateAction<boolean>>;

export type SearchFormProps = {
    setData: SetDataType;
    setError: SetErrorType;
    setLoading: SetLoadingType;
};
