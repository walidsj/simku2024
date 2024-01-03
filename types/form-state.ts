export type PrevState = {
    success: boolean | null
    message: string | null
    errors: Record<string, string[]> | null
}

export const initialFormState: PrevState = {
    success: null,
    message: null,
    errors: {},
}
