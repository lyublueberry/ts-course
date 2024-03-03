async function getFaqs(req): Promise<answer[]> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

let req: {
    topicId: number,
	status: Status
}

enum Status {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

let answer:{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: Status
}