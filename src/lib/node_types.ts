import NumberInputNode from '$components/graph/nodes/NumberInputNode.svelte';
import TextInputNode from '$components/graph/nodes/TextInputNode.svelte';
import PromptNode from '$components/graph/nodes/PromptNode.svelte';
import CSVNode from '$components/graph/nodes/CSVNode.svelte';
import JSONNode from '$components/graph/nodes/JSONNode.svelte';
import TranslateNode from '$components/graph/nodes/TranslateNode.svelte';
import EditCSVNode from '$components/graph/nodes/EditCSVNode.svelte';
import GridNode from '$components/graph/nodes/GridNode.svelte';
import MarkdownNode from '$components/graph/nodes/MarkdownNode.svelte';

export const nodeTypes = {
	text_input_v0: TextInputNode,
	prompt_v0: PromptNode,
	csv_v0: CSVNode,
	json_v0: JSONNode,
	participant_filter_v0: TextInputNode,
	number_input_v0: NumberInputNode,
	translate_v0: TranslateNode,
	edit_csv_v0: EditCSVNode,
	jsonata_v0: TextInputNode,
	grid_v0: GridNode,
	markdown_v0: MarkdownNode
};

import { csv } from '$lib/compute/csv';
import { merge } from '$lib/compute/merge';
import { cluster_extraction } from '$lib/compute/cluster_extraction';
import { argument_extraction } from '$lib/compute/argument_extraction';
import { open_ai_key } from '$lib/compute/open_ai_key';
import { report } from '$lib/compute/report';
import { participant_filter } from '$lib/compute/participant_filter';
import { limit_csv } from '$lib/compute/limit_csv';
import { translate } from '$lib/compute/translate';
import { edit_csv } from '$lib/compute/edit_csv';
import { jsonata } from '$lib/compute/jsonata';
import { grid } from '$lib/compute/grid';
import { count_tokens } from '$lib/compute/count_tokens';
import { merge_cluster_extraction } from '$lib/compute/merge_cluster_extraction';
import { json } from '$lib/compute/json';
import { markdown } from '$lib/compute/markdown';

export const compute = {
	open_ai_key_v0: open_ai_key,
	csv_v0: csv,
	cluster_extraction_v0: cluster_extraction,
	argument_extraction_v0: argument_extraction,
	report_v0: report,
	participant_filter_v0: participant_filter,
	merge_v0: merge,
	limit_csv_v0: limit_csv,
	translate_v0: translate,
	edit_csv_v0: edit_csv,
	jsonata_v0: jsonata,
	grid_v0: grid,
	count_tokens_v0: count_tokens,
	merge_cluster_extraction_v0: merge_cluster_extraction,
	json_v0: json,
	markdown_v0: markdown
};

import csv_doc from '$lib/docs/csv';
import limit_csv_doc from '$lib/docs/limit_csv';
import edit_csv_doc from '$lib/docs/edit_csv';
import open_ai_key_doc from '$lib/docs/open_ai_key';
import cluster_extraction_doc from '$lib/docs/cluster_extraction';
import merge_cluster_extraction_doc from '$lib/docs/merge_cluster_extraction';
import argument_extraction_doc from '$lib/docs/argument_extraction';
import grid_doc from '$lib/docs/grid';
import jsonata_doc from '$lib/docs/jsonata';
import translate_doc from '$lib/docs/translate';
import participant_filter_doc from './docs/participant_filter';
import json_doc from './docs/json';
import markdown_doc from './docs/markdown';

export const docs = {
	csv_v0: csv_doc,
	limit_csv_v0: limit_csv_doc,
	edit_csv_v0: edit_csv_doc,
	open_ai_key_v0: open_ai_key_doc,
	cluster_extraction_v0: cluster_extraction_doc,
	argument_extraction_v0: argument_extraction_doc,
	grid_v0: grid_doc,
	jsonata_v0: jsonata_doc,
	translate_v0: translate_doc,
	participant_filter_v0: participant_filter_doc,
	merge_cluster_extraction_v0: merge_cluster_extraction_doc,
	json_v0: json_doc,
	markdown_v0: markdown_doc
};
