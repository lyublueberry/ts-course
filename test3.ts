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
},