export type PrevState = {
    success: boolean | null
    error: boolean | null
    message: string | null
    errors: Record<string, string[]> | null
}

export const initialFormState: PrevState = {
    success: null,
    error: null,
    message: null,
    errors: {},
}
