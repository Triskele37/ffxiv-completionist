import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

export function provideCompletionistPrimeNG() {
    return [
        MessageService,
        providePrimeNG({
            license: 'eyJpZCI6ImZkYzc1NjliLTY5NWYtNGRlOC05MWViLTkxMjMyNDE0ZjZhMyIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODU0NTU2MDIsImV4cCI6MTgxNjk5MTYwMn0.ymTwzJQNrTguZmXPs30FuEvDqDPSFAOA_jqHuAIBvWYivSj36x9YgupVEqJAiGsgMXRQ1ROtEbI9el81hUMMDA',
            theme: { preset: Aura }
        }),
    ];
}
