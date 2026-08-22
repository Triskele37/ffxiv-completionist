import { MessageService } from 'primeng/api';
export { MessageService };

export function createMessageServiceMock(): jest.Mocked<MessageService> {
    return {
        add: jest.fn(),
        addAll: jest.fn(),
        clear: jest.fn(),
    } as unknown as jest.Mocked<MessageService>;
}
