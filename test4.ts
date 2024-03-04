interface IRequest
{
	sum: number;
	from: number;
	to: number;
}

enum Status {
    Success = 'success',
    Failed = 'failed'
}

interface IDataAnswerSuccess extends IRequest {
    id: number
}

interface IDataAnswerFailed {
    errorMessage: string;
    errorCode: number;
}


interface IAnswerSuccess
{
    status: Status.Success;
    data: IDataAnswerSuccess
}

interface IAnswerFailed
{
    status: Status.Failed;
    data: IDataAnswerFailed
}

type Response =  IAnswerSuccess | IAnswerFailed;

function isSuc(response: Response): response is IAnswerSuccess {
    return response.status === Status.Success;
}

function isFailed(response: Response): response is IAnswerFailed {
    return response.status === Status.Failed;
}

function getId(response:Response): number {
    if(response.status === Status.Success) {
        return response.data.id;
    } else {
        throw new Error(response.data.errorMessage);
    }
}