class TrieNode {
    children: Record<string, TrieNode>
    names: string[]

    constructor() {
        this.children = {}
        this.names = []
    }
}

export class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(name: string) {
        let node = this.root
        for (const char of name.toLowerCase()){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }

            node = node.children[char]
            node.names.push(name)
        }
    }

    search(prefix: string): string[] {
        let node = this.root
        for (const char of prefix.toLowerCase()){
            if(!node.children[char]) return []
            node = node.children[char]
        }

        return node.names
    }
}