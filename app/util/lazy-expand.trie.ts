class TrieNode {
    children: Map<string, TrieNode>;
    names: string[];

    constructor() {
        this.children = new Map();
        this.names = [];
    }
}

export class LazyTrie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(name: string) {
        let node = this.root;

        for (const char of name.toLowerCase()) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }

            node = node.children.get(char)!;
            node.names.push(name); // Hanya menyimpan nama di setiap level
        }
    }

    search(prefix: string): string[] {
        let node = this.root;

        for (const char of prefix.toLowerCase()) {
            if (!node.children.has(char)) {
                return []; // Tidak ada hasil yang cocok
            }
            node = node.children.get(char)!;
        }

        return node.names; // Kembalikan semua nama yang sesuai
    }
}
