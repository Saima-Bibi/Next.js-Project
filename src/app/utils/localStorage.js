
export const localChatHistory = () => {
  if (typeof window === 'undefined') return [];
  try {
    const item = localStorage.getItem('chatHistory');
    return item ? JSON.parse(item) : [];
  } catch (e) {
    console.error("Error loading chat history", e);
    return [];
  }
};
